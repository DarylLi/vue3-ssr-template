<template>
	<div class="app" style="border: 1px solid #d6e0f9; border-radius: 10px; margin: 10px">
		<h2>page1</h2>
		<div>{{ count }}</div>
		<button @click="addCounter">+1</button>
	</div>
</template>

<script setup>
	import { storeToRefs } from "pinia";
	import { useHomeStore } from "../store/home";
	let homeStore = useHomeStore();
	homeStore.fetchHomeData();
	let { count } = storeToRefs(homeStore);
	function addCounter() {
		count.value++;
	}
</script>
