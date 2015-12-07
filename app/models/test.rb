class Test < ActiveRecord::Base

def self.client
 SoundCloud.new(:client_id => Rails.application.secrets.soundcloudkey )
end

# tracks = client.get('/tracks', :limit => 10, :order => 'hotness')

end
