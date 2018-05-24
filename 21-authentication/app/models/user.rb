class User < ApplicationRecord
  has_secure_password
  # def screenname=(screename)
  #   self.username=(screename)
  # end

  # def password=(password)
  #   encrypted_pw = Digest::SHA256.base64digest(password)
  #   self.password_digest = encrypted_pw
  # end
  #
  # def authenticate(password)
  #   self.password_digest == Digest::SHA256.base64digest(password)
  # end
end
