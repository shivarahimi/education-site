import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBook,
  faBookOpen,
  faChalkboardUser,
  faComments,
  faIdCard,
  faNewspaper,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const items = [
  {
    title: "داشبورد",
    src: "/app/dashboard",
    icon: <FontAwesomeIcon className="sideBarIcon" icon={faIdCard} />,
  },
  {
    title: "مدیریت ادمین",
    icon: <FontAwesomeIcon className="sideBarIcon" icon={faChalkboardUser} />,
    items: [
      {
        title: "افزودن ادمین",
        src: "/app/AdminManage/AddAdmin",
      },
      {
        title: "لیست ادمین",
        src: "/app/AdminManage/AdminsList",
      },
    ],
  },
  {
    title: "مدیریت دانشجو",
    icon: <FontAwesomeIcon className="sideBarIcon" icon={faUsers} />,
    items: [
      {
        title: "افزودن دانشجو",
        src: "/app/StudentsManage/AddStudent",
      },
      {
        title: "لیست دانشجو",
        src: "/app/StudentsManage/StudentsList",
      },
    ],
  },
  {
    title: "مدیریت ترم ها",
    icon: <FontAwesomeIcon className="sideBarIcon" icon={faBook} />,
    items: [
      {
        title: "افزودن ترم",
        src: "/app/AddCourse",
      },
      {
        title: "لیست ترم ها",
        src: "/app/CourseList",
      },
    ],
  },
  {
    title: "مدیریت اخبار",
    icon: <FontAwesomeIcon className="sideBarIcon" icon={faNewspaper} />,
    items: [
      {
        title: "افزودن اخبار",
        src: "/app/AddNews",
      },
      {
        title: "لیست اخبار",
        src: "/app/NewsListAdmin",
      },
    ],
  },
  {
    title: "مدیریت دوره ها",
    icon: <FontAwesomeIcon className="sideBarIcon" icon={faBookOpen} />,
    items: [
      {
        title: "افزودن دوره ها",
        src: "/app/AddLesson",
      },
      {
        title: "لیست دوره ها",
        src: "/app/LessonList",
      },
    ],
  },
  {
    title: "لیست کامنت ها",
    src: "/app/LessonComment/:lessonCommentId",
    icon: <FontAwesomeIcon className="sideBarIcon" icon={faComments} />,
  },
  {
    title: "خروج",
    src: "/logout",
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
  },
];
