function randomColor() {
    var o = Math.round, r = Math.random, s = 235;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

export default randomColor;