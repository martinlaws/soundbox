class AddUsernameToTracks < ActiveRecord::Migration

  def change
    add_column :tracks, :username, :string
  end

end
