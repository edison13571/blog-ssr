interface catalogUnit{
  level:number,
  title:string
}
function getHTitles(html:string):catalogUnit[]{
  let re = /\<h([1-4])\sid="(.*?)"\>/g
  let arr =[]
  let e = re.exec(html)
  while (e) {
    if (e.length > 2) {
      let unit = {
        level: parseInt(e[1]),
        title: e[2]
      }
      arr.push(unit)
    }
    e = re.exec(html)
  }
  return arr
}


export {
  getHTitles
}
