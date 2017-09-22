import React from 'react';
import PropTypes from 'prop-types';
import EventItem from "./EventItem";
import EventFilters from './EventFilters';
import EventAdd from './EventAdd'
import fetch from 'isomorphic-fetch';
import Loader from '../Common/Loader';

class Events extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            events: [],
            filter: '',
            newName: '',
            newNameValid: false,
            newPlace: '',
            newPlaceValid: false,
            newDate: '',
            newDateValid: false,
            newTime: '',
            newTimeValid: false

        };

        this.onClick = this.onClick.bind(this);
    }

    componentDidMount(){
        fetch('http://frontendinsights.com/events.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    events: data,
                    isLoading: false
                });
            })
    }

    onClick(event) {
        event.preventDefault();

        this.setState({ events: [] });
    }

    onDeleteClick(itemId, event){
        event.preventDefault();

        const filteredArray = this.state.events.filter(item => item.id !== itemId);
        this.setState({
            events: filteredArray
        })
    }

    onFilterChange(event) {
        const value = event.currentTarget.value;

        this.setState({
            filter: value
        })
    }

    onFormSubmit(event){
        event.preventDefault();

        const {
            events,
            newName,
            newPlace,
            newDate,
            newTime,
            newNameValid,
            newPlaceValid,
            newDateValid,
            newTimeValid
        } = this.state;
        const maxId = Math.max(...events.map(item => item.id));

        events.push({
            id: maxId + 1,
            name: newName,
            place: newPlace,
            date: newDate,
            time: newTime
        });

        if (newNameValid && newPlaceValid && newDateValid && newTimeValid){
            this.setState({
                events: events
            });
        }
    }


    onFieldChange(field, event) {
        const value = event.currentTarget.value;

        this.setState({
            [field]: value,
            [field + 'Valid']: value.length > 0
        });
    }

    render(){
        return(
            <div>
                <EventFilters filter={this.state.filter} onFilterChange={this.onFilterChange.bind(this)}/>
                <Loader isLoading={this.state.isLoading}>
            <ul>
                {this.state.events.map(item => {
                    const date = new Date(item.date);
                    if (date >= Date.now() && item.name.indexOf(this.state.filter) > -1) {
                        return <EventItem item={item} onDeleteClick={this.onDeleteClick.bind(this)}/>
                    }
                    return null
                })}
            </ul>
                </Loader>
            <button onClick={this.onClick.bind(this)}>Wyczyść</button>
                <EventAdd name={this.state.newName}
                          place={this.state.newPlace}
                          date={this.state.newDate}
                          time={this.state.newTime}
                          nameValid={this.state.newNameValid}
                          placeValid={this.state.newPlaceValid}
                          dateValid={this.state.newDateValid}
                          timeValid={this.state.newTimeValid}
                          onFieldChange={this.onFieldChange.bind(this)}
                          onFormSubmit={this.onFormSubmit.bind(this)}/>
            </div>
        );
    }
}
 Events.propTypes ={
    events: PropTypes.array.isRequired
 };

export default Events;