import { useState } from "react";
import { FilterGraphics } from "./FilterGraphics";
import {
  IFilter,
  filterPosts,
  findPostBySearchWord,
} from "../../sevices/FilterServices";
import { IPost } from "../../models/IPost";

interface FilterProps {
  setPosts: (posts: IPost[]) => void;
}

export const Filter = ({ setPosts }: FilterProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState<IFilter>({
    category: "",
    material: "",
    tools: "",
    level: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const posts = await filterPosts(filter);
    if (posts instanceof Array) {
      setPosts(posts);
    } else {
      setPosts([]);
    }
  };

  const handleSearch = async () => {
    const posts = await findPostBySearchWord(searchValue);
    if (posts instanceof Array) {
      setPosts(posts);
    } else {
      setPosts([]);
    }
  };

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="filter-layout-container">
        <FilterGraphics />
        <div className="filter-container">
          <div className="search-container">
            <div className="search-button-container">
              <input
                type="text"
                id="search"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button className="search-button" onClick={handleSearch}>
                <span className="material-symbols-rounded">search</span>
              </button>
            </div>
            <button className="toggle-filter" onClick={toggleFilter}>
              Filter
              <span
                className={`material-symbols-rounded ${
                  isOpen ? "filter-open" : "filter-closed"
                }`}
              >
                arrow_drop_down
              </span>
            </button>
          </div>

          {isOpen ? (
            <form className="filter" onSubmit={handleSubmit}>
              <div className="select-container">
                <select
                  name="category"
                  id="category"
                  value={filter.category}
                  onChange={handleChange}
                >
                  <option value="" defaultValue={""}>
                    Category
                  </option>
                  <option value="MENDING">Mend</option>
                  <option value="UPCYCLE">Upcycle</option>
                  <option value="REUSE">Reuse</option>
                </select>

                <select
                  name="material"
                  id="material"
                  value={filter.material}
                  onChange={handleChange}
                >
                  <option value="" defaultValue={""}>
                    Material
                  </option>
                  <option value="KNITTED">Knitted</option>
                  <option value="JERSEY">Jersey</option>
                  <option value="WOVEN">Woven</option>
                  <option value="LEATHER">Leather</option>
                  <option value="DENIM">Denim</option>
                  <option value="PVC-COATED">PVC-coated</option>
                </select>

                <select
                  name="tools"
                  id="tools"
                  value={filter.tools}
                  onChange={handleChange}
                >
                  <option value="" defaultValue={""}>
                    Tools
                  </option>
                  <option value="HAND-SEWING">Hand-sewing</option>
                  <option value="SEWING-MACHINE">Sewing machine</option>
                  <option value="IRON">Iron</option>
                  <option value="GLUE">Glue</option>
                </select>

                <select
                  name="level"
                  id="level"
                  value={filter.level}
                  onChange={handleChange}
                >
                  <option value="" defaultValue={""}>
                    Level
                  </option>
                  <option value="BEGINNER">Beginner</option>
                  <option value="INTERMEDIATE">Intermediate</option>
                  <option value="ADVANCED">Advanced</option>
                </select>
              </div>
              <div className="buttons">
                <button
                  className="reset"
                  onClick={() => {
                    setFilter({
                      category: "",
                      material: "",
                      tools: "",
                      level: "",
                    });
                  }}
                >
                  Reset
                </button>
                <button className="submit" type="submit">
                  Find Guides
                </button>
              </div>
            </form>
          ) : null}
        </div>
      </div>
    </>
  );
};
