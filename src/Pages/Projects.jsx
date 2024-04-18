import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    axios
      .get("https://smartbrand-sa.com/api/project/index")
      .then((res) => {
        setProjects(res.data.projects);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilterChange = (category) => {
    setLoading(true);
    setTimeout(() => {
      setFilter(category);
      setLoading(false);
    }, 1000);
  };

  // Function to filter projects based on selected category
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section>
      <PageHeader
        title={t("nav_projects")}
        slogan={t("home_services_description")}
      />

      <div className="mt-10">
        <div className="info basis-1/2">
          <h2 className="text-main-blue text-4xl text-center mb-3 font-bold">
            {t("projects_title")}
          </h2>
          <p className="font-semibold text-center mb-10">
            {t("projects_description")}
          </p>
        </div>

        <div className="flex overflow-x-auto mx-4 px-10 py-2 mb-8 md:justify-center gap-3">
          <button
            className="bg-main-blue px-4 py-1 rounded-lg text-white hover:bg-main-green"
            onClick={() => handleFilterChange("All")}
          >
            All
          </button>
          <button
            className="bg-main-blue px-4 py-1 rounded-lg text-white hover:bg-main-green"
            onClick={() => handleFilterChange("Apps")}
          >
            Apps
          </button>
          <button
            className="bg-main-blue px-4 py-1 rounded-lg text-white hover:bg-main-green"
            onClick={() => handleFilterChange("Web")}
          >
            Web
          </button>
          <button
            className="bg-main-blue px-4 py-1 rounded-lg text-white hover:bg-main-green"
            onClick={() => handleFilterChange("Design")}
          >
            Design
          </button>
          <button
            className="bg-main-blue px-4 py-1 rounded-lg text-white hover:bg-main-green"
            onClick={() => handleFilterChange("Motion")}
          >
            Motion
          </button>
          <button
            className="bg-main-blue px-4 py-1 rounded-lg text-white hover:bg-main-green"
            onClick={() => handleFilterChange("Marketing")}
          >
            Marketing
          </button>
        </div>

        {filteredProjects && !loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="card border rounded-lg shadow-md"
              >
                <img
                  src={
                    project.image
                      ? project.image
                      : "https://via.placeholder.com/400"
                  }
                  alt={project.name_en + "project"}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {i18n.language == "ar"
                        ? project.name_ar
                        : project.name_en}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">
                    {i18n.language == "ar"
                      ? project.description_en
                      : project.description_ar}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-10">
            <Stack spacing={1}>
              {/* For variant="text", adjust the height via font-size */}
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              {/* For other variants, adjust the size with `width` and `height` */}
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
            <Stack spacing={1}>
              {/* For variant="text", adjust the height via font-size */}
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              {/* For other variants, adjust the size with `width` and `height` */}
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
            <Stack spacing={1}>
              {/* For variant="text", adjust the height via font-size */}
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              {/* For other variants, adjust the size with `width` and `height` */}
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
