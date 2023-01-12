import * as React from 'react';
import './style.css';
import { Fraction, toTex } from 'algebra.js';
import { Node, Context } from 'react-mathjax';

function Formula(props) {
  return (
    <Context input="tex">
      <Node inline>{props.tex}</Node>
    </Context>
  );
}

function FractionDisplay() {
  const a = new Fraction(1, 5);
  const b = new Fraction(2, 7);
  const answer = a.multiply(b);

  const question = <Formula tex={`${toTex(a)} × ${toTex(b)} = ${toTex(answer)}`} />;

  return (
    <div>
      {question}
    </div>
  );
}
export default function App() {

  return (
    <div>
      <FractionDisplay/>
    </div>
  );
}
