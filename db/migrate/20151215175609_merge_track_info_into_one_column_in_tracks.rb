class MergeTrackInfoIntoOneColumnInTracks < ActiveRecord::Migration

  def change
    add_column :tracks, :track_info, :string
    remove_column :tracks, :artist, :string
    remove_column :tracks, :title, :string  
  end

end
