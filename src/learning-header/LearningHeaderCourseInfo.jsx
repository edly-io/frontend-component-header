import React from 'react';
import PropTypes from 'prop-types';

const LearningHeaderCourseInfo = ({
  courseOrg,
  courseNumber,
  courseTitle,
}) => (
  <div className="course-info-header">
    <span className="d-block title">{courseTitle}</span>
    <span className="d-block org">{courseOrg} {courseNumber}</span>
  </div>
);

export const courseInfoDataShape = {
  courseOrg: PropTypes.string,
  courseNumber: PropTypes.string,
  courseTitle: PropTypes.string,
};

LearningHeaderCourseInfo.propTypes = courseInfoDataShape;

export default LearningHeaderCourseInfo;
