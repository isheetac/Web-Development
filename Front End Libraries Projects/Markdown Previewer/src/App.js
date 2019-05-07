import React,{Component} from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
let marked=require("marked");


class App extends Component{
  constructor(){
    super();
    this.state={
      markdown:'# Sample Markdown Heading\n\n## A Sub Heading \n\n### Another smaller heading\n\nParagraphs are separated by a blank line.\n\nText attributes include *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * Dogs\n  * Cats\n  *Birds\n\nOrdered List:\n\n  1.Dogs\n\n  2.Cats\n\n  3.Birds\n\n---\n\n#### Created by:\n*Isheeta Chinchankar*'
    };
  }

  updateMarkdown=function(markdown){
    this.setState({markdown});
  }

  render(){
    let {markdown}=this.state;
    return(
      <div className="AppContainer">
        <div>
        <h1 className="headings" style={{textAlign:"center"}}> MarkDown Previewer </h1>
        <hr style={{backgroundColor:"white"}}></hr>
          <FormGroup controlId="formControlTextarea">
          <h2 className="headings" style={{textAlign:"center"}}>Markdown Input</h2>
          <FormControl as="textarea" placeholder="Enter Markdown" rows="10" value={markdown} onChange={(event)=>this.updateMarkdown(event.target.value)}></FormControl>
          </FormGroup>
        </div>

        <div>
          <h2 className="headings" style={{textAlign:"center"}}>Markdown Output</h2>
          <div dangerouslySetInnerHTML={{__html:marked(markdown)}} style={{border:"1px solid white"}}></div>
        </div>
      </div>
    )
  }
}


export default App