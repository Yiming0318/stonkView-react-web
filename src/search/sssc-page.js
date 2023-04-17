import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import {findStockBySymbolThunk} from "../stock/stock-thunks";
import {findStockBySymbol} from "../stock/stock-service";
import {Link, useParams, useNavigate} from "react-router-dom";
import StockDetailScreen from "./stock-details";
import React from "react";

const SearchSingleStockDetail = () => {
  const {searchStockCode} = useParams();
  const navigate = useNavigate();
  const [symbol, setSymbol] = useState(searchStockCode);
  const [results, setResults] = useState([]);
  const {singlestocks} = useSelector((state) => state.singlestock);
  const dispatch = useDispatch();
  const searchStock = async () => {
    const response = await findStockBySymbol(symbol);
    setResults(response);
    navigate(`/search/${symbol}`);
  }
  useEffect(() => {
    if(searchStockCode){
      searchStock();
    }
  }, [searchStockCode]);

  return(
      <>
        <h1>Search Stocks By Symbol</h1>

        <div className={"row"}>
          <div className={"col-10"}>
            <input
                className={"form-control"}
                onChange={(e) => {
                  setSymbol(e.target.value);
                }}
                value={symbol}/>
          </div>
          <div className={"col-2"}>
            <button className={"btn btn-primary"}
                onClick={searchStock}>Search Stock</button>
          </div>
        </div>

        <div className={"row"}>
        <p>Search example: </p>
        <p>AAPL</p>
        <p>AAPL,TSLA</p>
        <p>AAPL,TSLA,MSFT</p>
        </div>

        <ul className={"group-list"}>
          {
              results && results.map((result) => {
                return (
                    <>
                      <li className={"group-list-item mb-2"} key={result.ticker}>
                        {result.ticker} : {result.price} &nbsp; &nbsp; &nbsp;
                        <Link to={`/search/stock/${result.ticker}`}>
                          <button className={"btn btn-primary"}>Stock Details</button>
                        </Link>
                      </li>
                    </>
                );
            })
          }
        </ul>

      </>
  );
};

export default SearchSingleStockDetail;