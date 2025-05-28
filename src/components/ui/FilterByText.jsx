export default function FilterByText ({ filterValue, handleChange }) {
    return (
        <input
            value={filterValue}
            onChange={handleChange}
            type="text"
            className="form-control"
        />
    );
}