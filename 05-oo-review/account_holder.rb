class AccountHolder
  # attr_reader :accounts

  def initialize(address, full_name)
    @address = address
    @full_name = full_name
    # @accounts = []
    # @bank_rep = []
  end

  def accounts
    #find all bank accounts
    all_accounts = BankAccount.all
    #pick only my accounts
    all_accounts.select do |bank_account|
      bank_account.account_holder == self
    end
  end

end
