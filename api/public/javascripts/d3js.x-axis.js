let width = 400
let height = 100

let data = [10, 15, 20, 25, 30]

let svg = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height)

let scale = d3.scaleLinear()
  .domain([d3.min(data), d3.max(data)])
  .range([0, width - 100])

let x_axis = d3.axisBottom()
  .scale(scale)

svg.append("g")
  .call(x_axis)