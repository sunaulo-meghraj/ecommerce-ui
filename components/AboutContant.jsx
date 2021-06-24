import React from "react";

const AboutContant = () => {
  return (
    <div className="col-span-7 ">
      <h1 className="text-3xl md:text-6xl ">About The Tests</h1>
      <p className="text-sm tracking-wider text-gray-300  my-10">
        This site is using the standard WordPress Theme Unit Test Data for
        content. The Theme Unit Test is a series of posts and pages that match
        up with a checklist on the WordPress codex. You can use the data and
        checklist together to test your theme.
      </p>
      <h1 className="text-3xl md:text-5xl tracking-tighter font-light">
        WordPress Theme Development Resources
      </h1>
      <ul className="list-decimal text-sm m-10  space-y-3 text-gray-400">
        <li>
          See{" "}
          <a href="/" className="text-blue-700">
            Theme Development
          </a>{" "}
          for{" "}
          <a href="/" className="text-blue-700">
            code standards
          </a>
          , examples of best practices, and{" "}
          <a href="/" className="text-blue-700">
            resources for Theme development.
          </a>
        </li>
        <li>
          See{" "}
          <a href="/" className="text-blue-700">
            {" "}
            Theme Unit Test
          </a>{" "}
          for a robust test suite for your Theme and get the latest version of
          the test data you see here
        </li>
        <li>
          See{" "}
          <a href="/" className="text-blue-700">
            Theme Review
          </a>{" "}
          for a guide to submitting your Theme to the{" "}
          <a href="/" className="text-blue-700">
            Themes Directory.
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutContant;
