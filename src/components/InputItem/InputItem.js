import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
    state = {
        inputValue: '',
        label: "Добавить"
    };

    onButtonClick = () => {
        this.setState({
            inputValue: '',
            error: false
        });

        if (this.state.inputValue === '') {
            this.setState({
                error: true,
                id: "standard-error",
                label: "Введите дело!"
            })
        } else {
            this.setState({
                id: "standard-basic",
                label: "Добавить"
            })
            this.props.onClickAdd(this.state.inputValue);
        }
    }

    render() {
        const { onClickAdd } = this.props;

        return (
            <div className={styles.wrap}>
                <TextField
                    error={this.state.error}
                    id={this.state.id}
                    label={this.state.label}
                    value={this.state.inputValue}
                    onChange={event => this.setState({inputValue: event.target.value.toUpperCase()})}
                    fullWidth
                />
                <button className={styles.btn} onClick={this.onButtonClick}>+</button>
            </div>);
    }
};

export default InputItem;