# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_05_233914) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.string "name"
    t.integer "level"
    t.string "card_type"
    t.string "desc"
    t.integer "atk"
    t.integer "def"
    t.string "image_url"
    t.boolean "in_atk_mode"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "decks", force: :cascade do |t|
    t.bigint "player_id", null: false
    t.bigint "card_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_decks_on_card_id"
    t.index ["player_id"], name: "index_decks_on_player_id"
  end

  create_table "games", force: :cascade do |t|
    t.boolean "game_over"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "matches", force: :cascade do |t|
    t.bigint "player_id", null: false
    t.bigint "game_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_matches_on_game_id"
    t.index ["player_id"], name: "index_matches_on_player_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.integer "life_points"
    t.string "image_url"
    t.string "catch_phares"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.string "password_digest"
  end

  add_foreign_key "decks", "cards"
  add_foreign_key "decks", "players"
  add_foreign_key "matches", "games"
  add_foreign_key "matches", "players"
end
