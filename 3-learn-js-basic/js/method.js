const myself = {
    // property
    name: 'kaung win thant',
    age: 23,
    single: true,

    // method 
    teach: function(what,where){
        return this.name+" am learning " + what + ' at ' + where;
    },
    // ES6
    learn(anything='anything'){
        return `${this.name} can learn ${anything}`;
    },
    showThis : function(){
        console.log(this.name,this.age,this.learn());
    }

    
}

console.log(myself.teach('Web Developmemt','Data Land and MMS IT'));
console.log(myself.learn('Programming'));

myself.showThis();