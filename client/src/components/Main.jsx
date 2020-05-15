import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AllCategories from "./AllCategories"
import AllRestaurants from "./AllRestaurants"
import SingleRes from "./SingleRes"
import CreateRes from "./CreateRes"
import EditPage from "./EditPage"
import Login from './Login';
import Register from './Register';
import { getAllCategories, getAllRestaurants, postRestaurant, putRestaurant, destroyRestaurant } from '../services/api-helper';


export default class Main extends Component {
  state = {
    categories: [],
    restaurants: []
  }

  componentDidMount() {
    this.readAllCategories();
    this.readAllRestaurants();
  }

  readAllCategories = async () => {
    const categories = await getAllCategories();
    this.setState({ categories })
  }

  readAllRestaurants = async () => {
    const restaurants = await getAllRestaurants();
    this.setState({ restaurants })
  }

  handleResSubmit = async (ResData) => {
    const newRes = await postRestaurant(ResData);
    this.setState(prevState => ({
      restaurants: [...prevState.restaurants, newRes]
    }))
  }

  handleResUpdate = async (id, ResData) => {
    const updatedRes = await putRestaurant(id, ResData);
    this.setState(prevState => ({
      restaurants: prevState.restaurants.map(restaurant => {
        return restaurant.id === id ? updatedRes : restaurant
      })
    }))
  }

  handleResDelete = async (id) => {
    await destroyRestaurant(id);
    this.setState(prevState => ({
      restaurants: prevState.restaurants.filter(restaurant => {
        return restaurant.id !== id
      })
    }))
  }


  render() {
    return (
      <main>
        <Route path='/login' render={(props) => (
          <Login
            {...props}
            handleLogin={this.props.handleLogin}
          />
        )} />
        <Route path='/register' render={(props) => (
          <Register
            {...props}
            handleRegister={this.props.handleRegister}
          />
        )} />
        <Route path='/categories' render={(props) => (
          <AllCategories
          {...props}
          handleResDelete={this.handleResDelete}
            categories={this.state.categories}
          />
        )} />
        <Route exact path='/restaurants' render={(props) => (
          <AllRestaurants
            {...props}
            handleResDelete={this.handleResDelete}
            restaurants={this.state.restaurants}
          />
        )} />
        <Route path="/new/restaurants" render={(props) => (
          <CreateRes
            {...props}
            handleResSubmit={this.handleResSubmit}
            currentUser={this.props.currentUser}
          />
        )} />
        <Route path='/restaurants/:id/edit' render={(props) => {
          const { id } = props.match.params;
          return <EditPage
            {...props}
            id={id}
            handleResUpdate={this.handleResUpdate}
            restaurants={this.state.restaurants}

          />
        }} />
        <Route exact path='/restuarants/:id' render={(props) => {
          const { id } = props.match.params
          return <SingleRes
            id={id}
            categories={this.state.categories}
          />
        }
        } />
      </main>
    )
  }
}
