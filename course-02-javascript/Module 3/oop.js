var item1 = {
    shoe : 20,
    taxiState: 1.2,

    totalprice:function(){
        var total = this.shoe * this.taxiState;
        console.log(total)

    }
}

item1.totalprice()
console.log(item1.shoe)


var item2 = {
    shoe : 30,
    taxiState: 1.2,

    totalprice:function(){
        var total = this.shoe * this.taxiState;
        console.log(total)

    }
}

item2.totalprice()
