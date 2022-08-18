var data = [{ x: 100, y: 100 }, { x: 200, y: 200 }, { x: 300, y: 300 }]

let svg = d3.select("#result")
  .append("svg")
  .attr("width", "800px")
  .attr("height", "800px")
svg.selectAll("circle")
  .data(data)
  .enter().append("circle")
  .attr("cx", function (d) { return d.x; })
  .attr("cy", function (d) { return d.y; })
  .attr("r", 2.5)

//line 
let svg2 = d3.select("#line")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500)

svg2.append("line")
  .attr("x1", 100)
  .attr("x2", 500)
  .attr("y1", 50)
  .attr("y2", 50)
  .attr("stroke", "black")

//rect
let svg3 = d3.select("#rect")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500)

svg3.append("rect")
  .attr("x1", 0)
  .attr("y", 0)
  .attr("width", 200)
  .attr("height", 100)

// circle
let svg4 = d3.select("#circle")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500)

svg4.append("circle")
  .attr("cx", 250)
  .attr("cy", 50)
  .attr("r", 50)

// ellipse
let svg5 = d3.select("#ellipse")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500)

svg5.append("ellipse")
  .attr("cx", 250)
  .attr("cy", 50)
  .attr("rx", 150)
  .attr("ry", 50)

// text
let svg6 = d3.select("#text")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500)

// create groupe element
let g = svg6.append("g")
  .attr("transform", function (d, i) {
    return "translate(0,0)"
  })

g.append("ellipse")
  .attr("cx", 250)
  .attr("cy", 50)
  .attr("rx", 150)
  .attr("ry", 50)
// .append("text")

g.append("text")
  .attr("x", 150)
  .attr("y", 50)
  .attr("stroke", "#FFF")
  .text("this id an ellipse!")

