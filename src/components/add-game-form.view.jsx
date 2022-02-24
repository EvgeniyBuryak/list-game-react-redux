import React from 'react';

const AddGameForm = ({onInputChange, onFormSubmit}) =>
    (
        <form>
			{/* <div className="form-group">
			    <label htmlFor="emailAddress">Email address</label>
			    <input type="email" className="form-control" name="email" onChange={onInputChange} placeholder="name@example.com" />
			</div> */}
			
			<div className="form-group">
			    <label htmlFor="fullName">Game Name</label>
			    <input type="name" className="form-control" name="name" onChange={onInputChange} placeholder="Space" />
			</div>			

			<button className="btn btn-primary" type="submit" onClick={onFormSubmit}> Submit </button>
		</form>
    )

export default AddGameForm;