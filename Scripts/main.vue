<template>
    <div class="card-body">
      <h5 class="card-title">Mutton Leg</h5>
      <h6 class="card-subtitle mb-2">Price: Rs.699</h6>
      <p class="card-text">Quantity: {{ quantity }}</p>
      <div class="d-grid gap-2">
        <button class="btn btn-dark text-white" @click="decreaseQuantity">Add to cart</button>
        <button class="btn btn-dark text-white" @click="increaseQuantity">Remove from cart</button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  
  export default {
    data() {
      return {
        quantity: localStorage.getItem("quantity") || 69
      };
    },
    methods: {
      decreaseQuantity() {
        if (this.quantity > 0) {
          this.quantity--;
        }
      },
      increaseQuantity() {
        this.quantity++;
      }
    },
    watch: {
      quantity(newValue) {
        localStorage.setItem("quantity", newValue);
      }
    }
  };
  </script>
  