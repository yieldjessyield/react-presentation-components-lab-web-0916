const React = require('react')

 export default function DumberComponent(props) {
   return (
     <div onClick={props.handleClick}>I am just happy.</div>
   )
 }

 module.exports = DumberComponent

