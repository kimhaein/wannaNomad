import React, { Component } from "react";
import { WriteConsumer } from "../../contexts/writeContext";
import { Controlled as CodeMirror } from "react-codemirror2";
import "./write.css";
// CodeMirror를 위한 CSS 스타일
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

interface Props {
  contents: string;
  setContents: () => void;
}
interface State {}

class Editor extends Component<Props, State> {
  render() {
    const { contents, setContents } = this.props;
    return (
      <div className="codemirror">
        <CodeMirror
          value={contents}
          options={{
            mode: "xml",
            theme: "material",
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            setContents(value);
          }}
        />
      </div>
    );
  }
}

const Write = () => (
  <WriteConsumer>
    {({ state, actions }: any) => (
      <Editor contents={state.contents} setContents={actions.setContents} />
    )}
  </WriteConsumer>
);

export default Write;
