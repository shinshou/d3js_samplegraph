let width = 400
let height = 400

let data = [10, 15, 20, 25, 30]
// svg描画領域の設定
let svg = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height)

// x軸スケーリングの設定
let xscale = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([0, width - 100])

// y軸スケーリングの設定
let yscale = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([height / 2, 0])

let x_axis = d3.axisBottom()
  .scale(xscale)

let y_axis = d3.axisLeft()
  .scale(yscale)

svg.append("g")
  .attr("transform", "translate(50,10)")
  .call(y_axis)

let xAxisTranslate = height / 2 + 10

svg.append("g")
  .attr("transform", "translate(50," + xAxisTranslate + ")")
  .call(x_axis)

