import React from 'react';

const AddressAndContactForm = () => {
    return (
        <div className="profile-box">
                        <aside className="profile-side">
                            <h3 className="profile-side-title">Address & Contact</h3>
                        </aside>
                        <div className="profile-data">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="reg-label">Corporate Headquarters</h6>
                                    <div className="d-grp">
                                        <input type="text" name="addr" className="d-inp" placeholder="Address (Line 1)"
                                            required />
                                    </div>
                                    <div className="d-grp">
                                        <input type="text" name="addr" className="d-inp" placeholder="Address (Line 2)"
                                            required />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 pr-1">
                                            <div className="d-grp">
                                                <select name="" id="" className="d-inp" required>
                                                    <option value="">Lecturer</option>
                                                    <option value="">Evaluator</option>
                                                    <option value="">Admin</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 pl-1">
                                            <div className="d-grp">
                                                <select name="" id="" className="d-inp" required>
                                                    <option value="">Lecturer</option>
                                                    <option value="">Evaluator</option>
                                                    <option value="">Admin</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 pr-1">
                                            <div className="d-grp">
                                                <input type="text" name="addr" className="d-inp" placeholder="City"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-4 px-1">
                                            <div className="d-grp">
                                                <input type="text" name="addr" className="d-inp" placeholder="District"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-1">
                                            <div className="d-grp">
                                                <input type="number" name="addr" className="d-inp" placeholder="Zipcode"
                                                    required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 pr-1">
                                            <div className="d-grp">
                                                <input type="number" name="addr" className="d-inp"
                                                    placeholder="Phone Number" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 pl-1">
                                            <div className="d-grp">
                                                <input type="email" name="addr" className="d-inp" placeholder="Office mail"
                                                    required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex">
                                        <h6 className="reg-label">Corporate Headquarters</h6>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" for="customCheck1">Same as Corporate
                                                Head
                                                Quarters</label>
                                        </div>
                                    </div>
                                    <div className="d-grp">
                                        <input type="text" name="addr" className="d-inp" placeholder="Address (Line 1)"
                                            required />
                                    </div>
                                    <div className="d-grp">
                                        <input type="text" name="addr" className="d-inp" placeholder="Address (Line 2)"
                                            required />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 pr-1">
                                            <div className="d-grp">
                                                <select name="" id="" className="d-inp" required>
                                                    <option value="">Lecturer</option>
                                                    <option value="">Evaluator</option>
                                                    <option value="">Admin</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 pl-1">
                                            <div className="d-grp">
                                                <select name="" id="" className="d-inp" required>
                                                    <option value="">Lecturer</option>
                                                    <option value="">Evaluator</option>
                                                    <option value="">Admin</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 pr-1">
                                            <div className="d-grp">
                                                <input type="text" name="addr" className="d-inp" placeholder="City"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-4 px-1">
                                            <div className="d-grp">
                                                <input type="text" name="addr" className="d-inp" placeholder="District"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-1">
                                            <div className="d-grp">
                                                <input type="number" name="addr" className="d-inp" placeholder="Zipcode"
                                                    required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 pr-1">
                                            <div className="d-grp">
                                                <input type="number" name="addr" className="d-inp"
                                                    placeholder="Phone Number" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 pl-1">
                                            <div className="d-grp">
                                                <input type="email" name="addr" className="d-inp" placeholder="Office mail"
                                                    required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}

export default AddressAndContactForm;