function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });

  return images;
}

const project1 = importAll(
  require.context("./projects/project1", false, /\.jpeg/)
);

const project2 = importAll(
  require.context("./projects/project2", false, /\.jpeg/)
);

const project3 = importAll(
  require.context("./projects/project3", false, /\.jpeg/)
);

const project4 = importAll(
  require.context("./projects/project4", false, /\.jpeg/)
);

export const projects = [
  {
    id: "1",
    type: "object / product design",
    title: "brush and massager (2 in 1)",
    _3d_img: project1["project_3d.jpeg"].default,
    _sketch1: project1["project_sketch_1.jpeg"].default,
    _sketch2: project1["project_sketch_2.jpeg"].default,
  },
  {
    id: "2",
    type: "object / product design",
    title: "Disinfectant for fingers",
    _3d_img: project2["project_3d.jpeg"].default,
    _sketch1: project2["project_sketch_1.jpeg"].default,
    _sketch2: project2["project_sketch_2.jpeg"].default,
  },
  {
    id: "3",
    type: "3D objects",
    title: "Glass pen holder",
    _3d_img: project3["project_3d.jpeg"].default,
  },
  {
    id: "4",
    type: "3D objects",
    title: "Multifunction Screwdriver",
    _3d_img: project4["project_3d.jpeg"].default,
  },
];
