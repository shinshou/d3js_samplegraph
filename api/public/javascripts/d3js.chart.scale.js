let data = [100, 400, 300, 900, 850, 1000]

let width = 500
let barHeight = 20
let margin = 1

let scale = d3.scaleLinear()
  .domain([d3.min(data), d3.max(data)])
  .range([50, 500])

let svg = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", barHeight * data.length)

let g = svg.selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", function (d, i) {
    return "translate(0," + i * barHeight + ")"
  })

g.append("rect")
  .attr("width", function (d) {
    return scale(d)
  })
  .attr("height", barHeight - margin)

g.append("text")
  .attr("x", function (d) {
    return (scale(d))
  })
  .attr("y", barHeight / 2)
  .attr("dy", ".35em")
  .text(function (d) {
    return d
  })