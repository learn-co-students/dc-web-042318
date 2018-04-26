require 'pry'
require_relative './bank_account.rb'
require_relative './account_holder.rb'

ah = AccountHolder.new('123 main', 'Tom Jones')
ba = BankAccount.new(300, ah)


binding.pry
puts 'hi'
