import React from "react";
import { IconButton, Input } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";

const SearchInput: React.FC = () => {
  const [searchKey, setSearchKey] = React.useState<string>("");
  const navigate = useNavigate();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
  };

  const handleClear = () => {
    setSearchKey("");
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchKey.length !== 0) {
      navigate(`/results?search_query=${searchKey}`);
    }
  };

  return (
    <Input
      placeholder="Search for GIFs..."
      variant="outlined"
      color="primary"
      sx={{ width: "60%" }}
      onChange={handleInput}
      onKeyUp={handleKeyPress}
      value={searchKey}
      startDecorator={searchKey.length === 0 ? <SearchIcon /> : null}
      endDecorator={
        searchKey.length === 0 ? null : (
          <IconButton onClick={handleClear}>
            <CancelIcon />
          </IconButton>
        )
      }
    />
  );
};

export default SearchInput;
