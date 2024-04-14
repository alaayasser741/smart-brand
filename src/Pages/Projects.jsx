import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/project/index")
      .then((res) => {
        setProjects(res.data.projects);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      <PageHeader
        title="مشاريعنا"
        slogan="مشاريعنا الناجحة"
        description="نقدم لكم مجموعة من المشاريع التي قمنا بتطويرها وتصميمها بأحدث التقنيات"
      />

      <div className="mt-10">
        <div className="info basis-1/2">
          <h2 className="text-main-blue text-4xl text-center mb-3 font-bold">
            مشاريعنا
          </h2>
          <p className="font-semibold text-center mb-10">
            نقدم لكم تصميم تطبيقات الجوال والويب بأحدث التقنيات
          </p>
        </div>

        <div className="flex overflow-x-auto mx-4 px-10 py-2 mb-8 md:justify-center gap-3">
          <button className="bg-main-blue px-4 py-1 rounded-lg text-white hover:bg-main-green">
            All
          </button>
          <button className="bg-main-blue px-4 py-1 rounded-lg text-white hover:bg-main-green">
            Apps
          </button>
          <button className="bg-main-blue px-4 py-1 rounded-lg text-white hover:bg-main-green">
            Web
          </button>
          <button className="bg-main-blue px-4 py-1 rounded-lg text-white hover:bg-main-green">
            Design
          </button>
          <button className="bg-main-blue px-4 py-1 rounded-lg text-white hover:bg-main-green">
            Motion
          </button>
          <button className="bg-main-blue px-4 py-1 rounded-lg text-white hover:bg-main-green">
            Marketing
          </button>
        </div>

        {projects && !loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card border rounded-lg shadow-md"
              >
                <img
                  src={project.image}
                  alt={project.name + "project"}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {project.name}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">{project.description}</p>
                </div>
              </div>
            ))}
            
            <div className="card border rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/400"
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptates, quos, quia, voluptas dolores
                </p>
              </div>
            </div>

            <div className="card border rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/400"
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptates, quos, quia, voluptas dolores
                </p>
              </div>
            </div>

            <div className="card border rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/400"
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptates, quos, quia, voluptas dolores
                </p>
              </div>
            </div>

            <div className="card border rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/400"
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptates, quos, quia, voluptas dolores
                </p>
              </div>
            </div>
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
