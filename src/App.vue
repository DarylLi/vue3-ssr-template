<template>
	<div class="app">
		<h2>drive by Vue3 app</h2>
		<div>{{ count }}</div>
		<button @click="addCounter">+1</button>
		<div class='mainNav'>
			<router-link to="/">
				<div class='mika-nav'>home</div>
			</router-link>
			<router-link to="/about">
				<div class='mika-nav'>about</div>
			</router-link>
		</div>
		<div class='extralink' style="position:absolute;left:50%;top:50%;transform: translateX(-50%);">
			<iframe src='https://wiki.biligame.com/ba/Momotalk' width="320" height="520" style='border:none;border-radius: 15px;'></iframe>
		</div>
		<!-- 路由的占位 -->
		<router-view></router-view>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import './index.css';
	
	const count = ref(100);
	function addCounter() {
		count.value++;
	}
</script>
