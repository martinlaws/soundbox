class AuthenticationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :provider, :uid, :index, :create, :destroy
end
