import React, { Component } from "react";

import "./styles.css";

var pages = {
  story: {
    text: "You are a shepherd. But you find that one of your sheep is lost. ",
    middleLabel: "Start",
    middlePage: "start",
    img: "https://i.ibb.co/M5zDvvj/true.png"
  },
  start: {
    text:
      "You found some suspicious marks in the sheepfold. The suspicious traces will be:",
    leftLabel: "Human footprints",
    middleLabel: "sheep footprints",
    rightLabel: "Wolf footprints ",
    leftPage: "Human",
    middlePage: "sheep",
    rightPage: "wolf",
    img: "https://i.ibb.co/tsXH2R8/b56eb05b7fb4451e6403dfcc2a8c492c.jpg"
  },
  Human: {
    text: "You find human footprints and follow them arrive at:",
    leftLabel: "A deep tree hole",
    middleLabel: "farmhouse",
    rightLabel: "lake",
    leftPage: "treehole",
    middlePage: "farmhouse",
    rightPage: "lake",
    img: "https://i.ibb.co/Hgd3pcb/131211-human-footprint-cheat-xexoiz.jpg"
  },
  sheep: {
    text: "You find the sheep footprints and follow them arrive at:",
    leftLabel: "A deep tree hole",
    middleLabel: "farmhouse",
    rightLabel: "lake",
    leftPage: "treehole",
    middlePage: "farmhouse",
    rightPage: "lake",
    img: "https://i.ibb.co/8m618v4/images-2.jpg"
  },
  wolf: {
    text: "You find the wolf footprints and follow them arrive at:",
    leftLabel: "lake",
    rightLabel: "A deep tree hole",
    leftPage: "lake",
    rightPage: "treehole",
    img:
      "https://i.ibb.co/smM4j0S/58081910-wolf-dog-footprint-paw-tracks-in-mud.jpg"
  },
  treehole: {
    text:
      "You want to walk closer and observe the situation inside. But accidentally you fell into the tree hole, and you think you:",
    leftLabel: "dead",
    middleLabel: "treasure",
    rightLabel: "find a new world",
    leftPage: "death",
    middlePage: "death",
    rightPage: "world",
    img: "https://i.ibb.co/cTJw2kB/14658119601-6c680a7e61-b.jpg"
  },
  farmhouse: {
    text:
      "You found a farmhouse. But the door of the farmhouse was tightly closed, and you heard:",
    leftLabel: "the cry of a sheep",
    rightLabel: "The sound of sharpening knife",
    leftPage: "death",
    rightPage: "death",
    img: "https://i.ibb.co/nCCkv2L/unnamed.png"
  },
  lake: {
    text:
      "Footprints disappeared by the lake, but you found something next to water. You think that is:",
    leftLabel: "a deep tree hole",
    middleLabel: "your sheep",
    rightLabel: "farmhouse",
    leftPage: "treehole",
    middlePage: "death",
    rightPage: "farmhouse",
    img: "https://i.ibb.co/YPMszRw/white-pines-lake-lisa-boulton.jpg"
  },
  death: {
    text: "Suddenly you wake up from bed, it turns out to be a dream. You will",
    leftLabel: "check sheepfold",
    rightLabel: "Go find the tree hole.",
    leftPage: "start",
    rightPage: "treehole",
    img: "https://i.ibb.co/6mHCsX8/images-3.jpg"
  },
  world: {
    text: "You have find a new world, this world is full of:",
    leftLabel: "cotton candy",
    middleLabel: "wool",
    rightLabel: "treasure",
    leftPage: "death",
    middlePage: "death",
    rightPage: "death",
    img: "https://i.ibb.co/L1PqzQD/1-g-Zd-CCvd8-QPLMTKc75jmn-GA.jpg"
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "story"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];
    var middleLabel = "";
    var leftLabel = "";
    var rightLabel = "";
    var imageElement = "";

    if (pageData.img) {
      imageElement = <img src={pageData.img} width="200" alt="unnamed" />;
    }

    if (pageData.leftLabel) {
      leftLabel = (
        <button
          id="leftButton"
          onClick={() => this.goToPage(pageData.leftPage)}
        >
          {pageData.leftLabel}
        </button>
      );
    }

    if (pageData.middleLabel) {
      middleLabel = (
        <button
          id="middleButton"
          onClick={() => this.goToPage(pageData.middlePage)}
        >
          {pageData.middleLabel}
        </button>
      );
    }

    if (pageData.rightLabel) {
      rightLabel = (
        <button
          id="rightButton"
          onClick={() => this.goToPage(pageData.rightPage)}
        >
          {pageData.rightLabel}
        </button>
      );
    }

    return (
      <div className="App">
        <div class="centerButtons">
          <p>{pageData.text}</p>
          {imageElement}
          {leftLabel}
          {middleLabel}
          {rightLabel}
        </div>
      </div>
    );
  }
}

export default App;
