import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useAlert } from "react-alert";
import { Row, Col } from "antd";
import "./Header.css";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { clearError, getAllColleges, getAllCollegesBranch } from "../../../redux/actions/collegeActions";


function Header() {
  const dispatch = useDispatch();
  // const alert = useAlert();
  // console.log("hello");
  const { colleges, error } = useSelector(state => state.collegesList);
  const { branches } = useSelector(state => state.branchList);
  console.log("HomePage", branches);
  // const {_id} = colleges;
  //console.log(_id);

  useEffect(() => {
    if (error) {
      // alert.error(error);
      dispatch(clearError());
    }
    dispatch(getAllColleges());

    // dispatch(getAllCollegesBranch(_id));
  }, [dispatch, error]);

  function mouseOver(_id) {
    dispatch(getAllCollegesBranch(_id));
  }
  function mouseOut() {
    console.log("mouseout");
  }



  return (
    <>
      <div className="header d-flex justify-content-center ">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-center fs-2">
              <div>
                <h2 className='heading'>
                  <Link to="/"> Materials</Link>
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Row justify="center" gutter={16} >
        {colleges?.colleges?.map((college) => {
          return (
            <Col lg={5} sm={24} xs={24} key={college._id} className="pt-2" >
              <div className="college">
                <Button colorScheme="teal" className="college-btn " size="lg" onMouseEnter={() => mouseOver(college._id)} onMouseLeave={mouseOut}>
                  {/* <Button colorScheme="teal" className="college-btn " size="lg" onClick={() =>mouseOver(college._id)} > */}

                  {college.name}
                </Button>
                <div className="college-content  bs1   d-flex justify-content-center align-items-center  text-center">
                  <h2> Branches </h2>
                  {branches?.branches?.map((branch) => {
                    return (
                      <>
                        <div className="m-2">
                          <Heading as="h3" size="sm" className="branch d-flex justify-content-center align-items-center  text-center" >
                            <Link to={`/${college.name}/${branch.name}`}>
                              {branch.name}
                            </Link>

                          </Heading>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Header;
