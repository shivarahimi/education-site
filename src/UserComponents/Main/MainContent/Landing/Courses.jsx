import React, { useContext } from "react";
import "./../../../../style/UserStyle/MainPage/Landing/Courses.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import { Navigation, Pagination, Thumbs, Autoplay } from "swiper";
import { Link, useParams } from "react-router-dom";
import { StateContext } from "../../../../AdminComponents/context/DataContext";
import CartContext from "./../../../../AdminComponents/context/ShoppingCartContext/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import {
  getCourseByid,
} from "./../../../../core/Services/UserServices/Comment";
import { useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../../../../AdminComponents/context/UserContext/UserContext";

const Courses = () => {
  const { courses } = useContext(StateContext);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { courseId } = useParams();
  // const [course, setCourse] = useState({
  //   lesson: {
  //     lessonName: "",
  //     description: "",
  //     image: "",
  //   },
  //   teacher: {
  //     fullName: "",
  //     email: "",
  //   },
  // });
  // const detaileCourse = async () => {
  //   try {
  //     const { data } = await getCourseByid(courseId);
  //     const result = data.result;
  //     setCourse(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   detaileCourse();
    
  // }, []);
  
  // const courseCourses = courses.slice(0,5)
  return (
    <section className="slider">
      <h2 className="titleCategory">دوره ها</h2>
      <div className="container">
        <div className="row courses">
          <Swiper
            loop={true}
            modules={[Navigation, Thumbs, Pagination, Autoplay]}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
            }}
            spaceBetween={20}
            slidesPerView={1}
            grabCursor={true}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {courses.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="landingCourse">
                  <div className="col-md-12 bootstrap">
                    <div className="course">
                      <Link
                        to={{
                          pathname: `/home/courseList/${item._id}`,
                          state: item,
                        }}
                        key={item._id}
                      >
                        <img src={item.lesson.image} alt="" />
                        <p className="blue">{item.title}</p>
                      </Link>
                      <hr style={{ color: "gray" }} />
                      <div
                        className="price-teacher"
                        style={{ fontSize: "13px" }}
                      >
                        <div style={{ color: "red" }}>(تومان){item.cost}</div>
                        <p style={{ color: "#1313b5", marginLeft: "35px" }}>
                          {item.teacher.fullName}
                          <FontAwesomeIcon
                            icon={faChalkboardTeacher}
                            style={{ marginLeft: "2px" }}
                          />
                        </p>
                      </div>
                      {cart.some((p) => p["_id"] === item["_id"]) ? (
                        <button
                          className="shoppingCourse"
                          style={{ color: "red", border: "1px solid red" }}
                          onClick={() => removeFromCart(item)}
                        >
                          دوره خریداری شده
                          <FontAwesomeIcon icon={faCartShopping} />
                        </button>
                      ) : (
                        <form>
                          <button
                            className="shoppingCourse"
                            style={{
                              color: "#09af46",
                              border: "1px solid #09af46",
                            }}
                            type="submit"
                            onClick={() => addToCart(item)}
                          >
                            خرید دوره
                            <FontAwesomeIcon icon={faCartShopping} />
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Courses;
