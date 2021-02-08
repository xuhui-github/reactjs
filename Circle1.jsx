var theCircle=<Circle bgColor="#F9C240"/>;

ReactDOM.render(
  <div>
    {theCircle}
  </div>,
  destination
);

//For example,you can go further and create a function that
//returns a Circle component
function showCircle(){
  var colors=["red","green","blue"];
  var index=Math.floor(Math.random()*colors.length);

  return <Circle bgColor={colors[index]}/>;
}

ReactDOM.render(
  <div>
  {showCircle()}
  {showCircle()}
  {showCircle()}
  </div>,
  destination
);

//create a component array
var colors=[""#393E41", "#E94F37", "#1C89BF", "#A1D363",

"#85FFC7", "#297373", "#FF8552", "#A40E4C"];
var circles=[];

for(var i=0;i<colors.length;i++)
  circles.push(<Circle bgColor={colors[i]}/>);

ReactDOM.render(
  <div>
    {circles}
  </div>,
  destination
);


for(var i=0;i<colors.length;i++){
  var color=colors[i]
  renderData.push(<Circle key={i+color} bgColor={color}/>);
}

//

