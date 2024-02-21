import { defineStore } from "pinia";
import axios from 'axios';

export const useHomeStore = defineStore("home", {
	state() {
		return {
			count: 1000,
			homeInfo:{}
		};
	},
	actions: {
		increment() {
			this.count++;
		},
		decrement() {
			this.count--;
		},
		async fetchHomeData() {
			let res = await axios.get('http://franxxdaryl.site:1919/mikamoods');
			this.homeInfo = res.data;
		},
	},
});
