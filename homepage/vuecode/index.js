var app = new Vue({
	el:'#app',
	data:{
		message:'hello-vue',
		seen:true,
		todos: [
		  { text: 'Learn JavaScript' },
		  { text: 'Learn Vue' },
		  { text: 'Build something awesome' }
		],
		groceryList:[
			{id:1,text:'蔬菜'},
			{id:2,text:'奶酪'},
			{id:3,text:'肉'}
		]
	},
	methods:{
		reserveMessage: function(){
			this.message = this.message.split('').reverse().join('')
		}
	}
});

app.message='I have change the data!';
app.seen=false;
app.todos.push({text:'English'});

Vue.component('todo-item',{
	template:'<li>this is a todo</li>'
});

Vue.component('todo-item1',{
	props:['todo'],
	template:'<li>{{todo.text}}</li>'
})