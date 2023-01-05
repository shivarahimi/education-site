import React, { Fragment, useEffect, useState } from "react";
import Header from "../../Header/Header";
import "./../../../../style/UserStyle/UserContent/NewsPage/NewsPage.css";
import { useParams } from "react-router";
import { ListNews } from "./../../../../core/Services/AdminServices/AdminPanelServices";
import { getNewsByid } from "../../../../core/Services/UserServices/Landing";
import { Link } from "react-router-dom";

const NewsPage = () => {
  const { newsId } = useParams();

  const [news, setNews] = useState("");
  console.log(news);
  const [newsList, setNewsList] = useState([]);

  const showNews = async () => {
    try {
      const { data } = await ListNews();
      const result = data.result;
      setNewsList(result);
    } catch (error) {
      console.log(error);
    }
  };
  const detaileNews = async () => {
    try {
      const { data } = await getNewsByid(newsId);
      const result = data.result;
      setNews(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    showNews();
    detaileNews();
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row Newspage">
          <div className="col-md-8">
            <div className="leftNews">
              <div className="single">
                <img src={news.image ? news.image : require("../../../../Assets/UserAssets/Header/loading_me.gif")} alt="" />
              </div>
              <div className="singleInformation">
                <h5 className="pb-2">{news.title}</h5>
                <p className="txt">{news.text}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="rightNews">
              <div className="lastNews mb-3">آخرین اخبار</div>
              {newsList.map((item) => (
                <Link
                  to={{ pathname: `/home/newsList/${item._id}`, state: item }}
                  key={item._id}
                >
                  <p className="bgNewspage">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewsPage;
