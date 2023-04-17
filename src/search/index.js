import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import React from "react";
import SearchSingleStockDetail from "./sssc-page";

const SearchSingleStock = () => {
  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1)
  }
  const handleSearch = () => {
    navigate('/wsb/search')
  }
  return (
      <div className="col-xl-12 main-content">
        <button onClick={handleGoBack}
                className="btn btn-primary me-2">
          Back
        </button>
        {currentUser && <SearchSingleStockDetail/>}
        {!currentUser && (
            <div className="row">
              <div className="col-12">
                <div className="alert alert-info">
                  Please log in to use Search Single Stock and Comment (SSSC) feature.
                </div>
              </div>
            </div>
        )}
      </div>
  );
};

export default SearchSingleStock;