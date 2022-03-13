import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome</h1>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Username: </label><br/>
                    <label for="inputEmail4"> Trustie1</label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Email: </label>
                    <label for="inputPassword4"> Trustie1@facilitas.com</label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-12">
                    <label for="inputCity">Skills: </label>
                    <input type="text" class="form-control" id="inputCity"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-12">
                    <label for="inputCity">Search Jobs: </label>
                    <input type="text" class="form-control" id="inputCity"/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">search</button>
            </form>

        </div>
    )
}
