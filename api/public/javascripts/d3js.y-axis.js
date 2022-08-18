let width = 400
let height = 400

let data = [10, 15, 20, 25, 30]
let svg = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height)

let scale = d3.scaleLinear()
  .domain([d3.min(data), d3.max(data)])
  .range([height / 2, 0])

let y_axis = d3.axisLeft()
  .scale(scale)

svg.append("g")
  .attr("transform", "translate(50,10)")
  .call(y_axis)