use tauri::{Menu, MenuItem, Submenu};

pub fn main_menu_builder() -> Menu {
  let echoo_menu = Menu::new()
    .add_native_item(MenuItem::Hide)
    .add_native_item(MenuItem::HideOthers)
    .add_native_item(MenuItem::ShowAll)
    .add_native_item(MenuItem::Separator)
    .add_native_item(MenuItem::Quit);
  Menu::new().add_submenu(Submenu::new("Echo", echoo_menu))
}
