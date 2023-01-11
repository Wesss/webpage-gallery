import React from "react";

export default class GenUtil {

  static createLink(url, text = null) {
    if (text === null) text = url;
    return <a target="_blank" href={url}>{text}</a>
  }

  static createList(firstline, bullets) {
    var bulletElems = [];
    for (var bullet of bullets) {
      bulletElems.push(<li key={bullet}>{bullet}</li>);
    }
    return <div>
      {firstline}
      <ul>
        {bulletElems}
      </ul>
    </div>
  }
}