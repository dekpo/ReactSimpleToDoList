import React from 'react';

class AddTask extends React.Component{
    render(){
        return(
            <>
                <h1 className="m-3">New Task</h1>
                <div className="card m-3">
                    <form className="card-body">
                        <div className="form-group m-2">
                            <label htmlFor="taskName">Task Name</label>
                            <input className="form-control" type="text" name="taskName" id="taskName" required></input>
                        </div>
                        <button type="submit" className="btn btn-primary m-2">Add Task</button>
                    </form>
                </div>
            </>
        )
    }
}

export default AddTask