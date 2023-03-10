import React from 'react';
import Badge from "react-bootstrap/Badge";
import { marked } from 'marked'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      markdown: "# Welcome to my React Markdown Previewer! \n## This is a sub-heading... \nHeres some code, `<div></div>`, between 2 backticks.\n\n ```\n // multi line code:\n\nfunction Example(line1, line2) { \n  if (line1 == line2) { \n    return line1 \n   } \n } \n\n```\n\n You can also make text **bold**... whoa!\n\nThere's also [links](https://www.freecodecamp.org) and\n\n> Block Quotes!\n- of course there are lists.\n1. And last but not least, let's not forget embedded images:\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)",
    }
  }


updateMarkdown(markdown) {
  this.setState({markdown})
}


  render(){



  return (
    <div className="App">
      <div className="container">
        <div className="row mt-4">
          <div className="col text-center">
            <h1>
              <Badge className="text-align-center" variant="light">
                Markdown Previewer
              </Badge>
            </h1>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center" variant="secondary">
                  Editor
                </Badge>
              </h4>
            </div>
            <div className="mark-input">
              <textarea id="editor" className="input" value={this.state.markdown} onChange={(e) => {this.updateMarkdown(e.target.value)}}> </textarea>
            </div>
          </div>

          <div className="col-md-6">
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center" variant="secondary">
                  Previewer
                </Badge>
              </h4>
            </div>
            <div id="preview" className="output" dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}>

            </div>
          </div>
        </div>


      </div>
    </div>
  );}
}


