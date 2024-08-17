use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn parse(code: String) -> Vec<u8> {
    wat::parse_str(code).unwrap()
}
